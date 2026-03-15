 "use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import DateReserve from "@/components/DateReserve";

export default function BookingPage() {
  const [venue, setVenue] = useState("");

  const handleVenueChange = (event: SelectChangeEvent) => {
    setVenue(event.target.value);
  };

  return (
    <section className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-4xl font-bold text-slate-900">Venue Booking</h1>
      <Box
        component="form"
        className="mt-8 flex max-w-2xl flex-col gap-6 rounded-2xl bg-white p-6 shadow-lg"
      >
        <TextField
          name="Name-Lastname"
          label="Name-Lastname"
          variant="standard"
        />
        <TextField
          name="Contact-Number"
          label="Contact-Number"
          variant="standard"
        />
        <FormControl variant="standard">
          <InputLabel id="venue-label">Venue</InputLabel>
          <Select
            id="venue"
            labelId="venue-label"
            value={venue}
            onChange={handleVenueChange}
          >
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
        </FormControl>
        <DateReserve />
        <Button name="Book Venue" variant="contained">
          Book Venue
        </Button>
      </Box>
    </section>
  );
}
