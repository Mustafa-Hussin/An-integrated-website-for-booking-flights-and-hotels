"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Search() {
  const [date, setDate] = useState<Date>();

  return (
    <Tabs defaultValue="flights" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="flights">Flights</TabsTrigger>
        <TabsTrigger value="hotels">Hotels</TabsTrigger>
        <TabsTrigger value="packages">Packages</TabsTrigger>
      </TabsList>
      <TabsContent value="flights" className="mt-6">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="grid gap-2">
            <label className="text-sm font-medium">From</label>
            <input
              type="text"
              placeholder="Departure city"
              className="rounded-md border p-2"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">To</label>
            <input
              type="text"
              placeholder="Arrival city"
              className="rounded-md border p-2"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <Button className="mt-auto">Search Flights</Button>
        </div>
      </TabsContent>
      <TabsContent value="hotels" className="mt-6">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="grid gap-2">
            <label className="text-sm font-medium">Destination</label>
            <input
              type="text"
              placeholder="Where are you going?"
              className="rounded-md border p-2"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Check-in</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Check-in date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Guests</label>
            <input
              type="number"
              placeholder="Number of guests"
              className="rounded-md border p-2"
              min="1"
            />
          </div>
          <Button className="mt-auto">Search Hotels</Button>
        </div>
      </TabsContent>
      <TabsContent value="packages" className="mt-6">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="grid gap-2">
            <label className="text-sm font-medium">Destination</label>
            <input
              type="text"
              placeholder="Where to?"
              className="rounded-md border p-2"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Duration</label>
            <select className="rounded-md border p-2">
              <option value="">Select duration</option>
              <option value="3-5">3-5 days</option>
              <option value="6-8">6-8 days</option>
              <option value="9-11">9-11 days</option>
              <option value="12+">12+ days</option>
            </select>
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Budget</label>
            <select className="rounded-md border p-2">
              <option value="">Select budget</option>
              <option value="economy">Economy</option>
              <option value="standard">Standard</option>
              <option value="luxury">Luxury</option>
            </select>
          </div>
          <Button className="mt-auto">Search Packages</Button>
        </div>
      </TabsContent>
    </Tabs>
  );
}