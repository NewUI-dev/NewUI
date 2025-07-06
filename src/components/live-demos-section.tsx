"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"

export function LiveDemosSection() {
  const [isDarkPreview, setIsDarkPreview] = useState(false)

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Interactive Component Demos</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See our components in action with live previews and theme switching
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Demo Card 1 */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Login Form</h3>
              <div className="flex items-center space-x-2">
                <Label htmlFor="theme-toggle" className="text-sm">
                  Dark
                </Label>
                <Switch id="theme-toggle" checked={isDarkPreview} onCheckedChange={setIsDarkPreview} />
              </div>
            </div>

            <div className={`rounded-lg border p-6 ${isDarkPreview ? "dark bg-slate-950" : "bg-background"}`}>
              <Card className="w-full max-w-sm mx-auto">
                <CardHeader>
                  <CardTitle>Welcome back</CardTitle>
                  <CardDescription>Enter your credentials to access your account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="m@example.com" type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                  </div>
                  <Button className="w-full">Sign In</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Demo Card 2 */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Component Showcase</h3>
            <div className="rounded-lg border p-6 space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button size="sm">Small</Button>
                <Button>Default</Button>
                <Button size="lg">Large</Button>
              </div>

              <div className="space-y-2">
                <Label>Settings</Label>
                <div className="flex items-center space-x-2">
                  <Switch id="notifications" />
                  <Label htmlFor="notifications">Enable notifications</Label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
