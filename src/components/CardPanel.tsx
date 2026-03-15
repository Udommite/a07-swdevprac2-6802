"use client";

import Rating from "@mui/material/Rating";
import { useEffect, useReducer } from "react";
import Card from "@/components/Card";
import { venueList } from "@/data/venues";

const ratingStorageKey = "venue-ratings";

const defaultRatings = new Map<string, number>(
  venueList.map((venue) => [venue.name, 0]),
);

type RatingsAction =
  | { type: "setRating"; venueName: string; rating: number }
  | { type: "removeVenue"; venueName: string };

function ratingsReducer(state: Map<string, number>, action: RatingsAction) {
  const nextState = new Map(state);

  switch (action.type) {
    case "setRating":
      nextState.set(action.venueName, action.rating);
      return nextState;
    case "removeVenue":
      nextState.delete(action.venueName);
      return nextState;
    default:
      return state;
  }
}

function createInitialRatings() {
  if (typeof window === "undefined") {
    return new Map(defaultRatings);
  }

  const storedRatings = window.localStorage.getItem(ratingStorageKey);
  if (!storedRatings) {
    return new Map(defaultRatings);
  }

  try {
    const parsedRatings = JSON.parse(storedRatings) as Record<string, number>;
    const mergedRatings = new Map(defaultRatings);

    Object.entries(parsedRatings).forEach(([venueName, rating]) => {
      if (typeof rating === "number") {
        mergedRatings.set(venueName, rating);
      }
    });

    return mergedRatings;
  } catch {
    return new Map(defaultRatings);
  }
}

export default function CardPanel() {
  const [ratings, dispatch] = useReducer(
    ratingsReducer,
    undefined,
    createInitialRatings,
  );

  useEffect(() => {
    const serializedRatings = JSON.stringify(Object.fromEntries(ratings));
    window.localStorage.setItem(ratingStorageKey, serializedRatings);
  }, [ratings]);

  return (
    <section className="flex flex-col gap-8">
      <section
        aria-label="Venue cards"
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {venueList.map((venue) => (
          <div key={venue.vid}>
            <Card
              venueName={venue.name}
              imgSrc={venue.image}
              rating={ratings.get(venue.name) ?? 0}
              onRatingChange={(venueName, rating) =>
                dispatch({ type: "setRating", venueName, rating })
              }
              showRating={false}
              href={`/venue/${venue.vid}`}
              footer={
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium text-slate-600">
                    Your rating
                  </span>
                  <Rating
                    id={`${venue.name} Rating`}
                    name={`${venue.name} Rating`}
                    data-testid={`${venue.name} Rating`}
                    value={ratings.get(venue.name) ?? 0}
                    onChange={(_, value) =>
                      dispatch({
                        type: "setRating",
                        venueName: venue.name,
                        rating: value ?? 0,
                      })
                    }
                  />
                </div>
              }
            />
          </div>
        ))}
      </section>

      <div className="flex flex-col gap-3">
        {Array.from(ratings.entries()).map(([venueName, rating]) => (
          <button
            key={venueName}
            type="button"
            data-testid={venueName}
            className="rounded-lg bg-white px-4 py-3 text-left text-slate-900 shadow"
            onClick={() => dispatch({ type: "removeVenue", venueName })}
          >
            {venueName} Rating : {rating}
          </button>
        ))}
      </div>
    </section>
  );
}
