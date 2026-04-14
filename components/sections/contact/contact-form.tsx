"use client"

import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { contactSchema, type ContactFormValues } from "@/lib/validations/contact"
import type { FormDict } from "@/types/dictionary"

type Props = {
    form: FormDict
}

export function ContactForm({ form }: Props) {
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: { website: "", service: [] },
    })

    async function onSubmit(data: ContactFormValues) {
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })

            if (!res.ok) throw new Error()

            toast.success(form.successMessage)
            reset()
        } catch {
            toast.error(form.errorMessage)
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="w-full max-w-xl"
        >
            <div className="space-y-5">
                {/* Honeypot — hidden from users; bots that fill every field trip this. */}
                <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                    {...register("website")}
                />

                <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-1.5">
                        <Label htmlFor="name">{form.name}</Label>
                        <Input
                            id="name"
                            type="text"
                            autoComplete="name"
                            aria-invalid={!!errors.name}
                            {...register("name")}
                        />
                        {errors.name && (
                            <p className="text-xs text-destructive">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    <div className="space-y-1.5">
                        <Label htmlFor="email">{form.email}</Label>
                        <Input
                            id="email"
                            type="email"
                            autoComplete="email"
                            aria-invalid={!!errors.email}
                            {...register("email")}
                        />
                        {errors.email && (
                            <p className="text-xs text-destructive">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="space-y-2">
                    <Label>{form.serviceLabel}</Label>
                    <Controller
                        name="service"
                        control={control}
                        render={({ field }) => (
                            <div className="grid grid-cols-2 gap-2">
                                {form.services.map((option) => {
                                    const checked = field.value.includes(option.value)
                                    return (
                                        <label
                                            key={option.value}
                                            htmlFor={`service-${option.value}`}
                                            className="flex cursor-pointer items-center gap-2.5 rounded-lg border border-input px-3 py-2.5 text-sm transition-colors hover:bg-accent has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary/5"
                                        >
                                            <Checkbox
                                                id={`service-${option.value}`}
                                                checked={checked}
                                                onCheckedChange={(isChecked) => {
                                                    field.onChange(
                                                        isChecked
                                                            ? [...field.value, option.value]
                                                            : field.value.filter((v) => v !== option.value)
                                                    )
                                                }}
                                            />
                                            <span>{option.label}</span>
                                        </label>
                                    )
                                })}
                            </div>
                        )}
                    />
                    {errors.service && (
                        <p className="text-xs text-destructive">
                            {errors.service.message}
                        </p>
                    )}
                </div>

                <div className="space-y-1.5">
                    <Label htmlFor="message">{form.message}</Label>
                    <Textarea
                        id="message"
                        className="min-h-32"
                        aria-invalid={!!errors.message}
                        {...register("message")}
                    />
                    {errors.message && (
                        <p className="text-xs text-destructive">
                            {errors.message.message}
                        </p>
                    )}
                </div>

                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? form.sending : form.submit}
                </Button>
            </div>
        </form>
    )
}
