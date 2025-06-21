import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  private placesService = inject(PlacesService)
  private destroyRef = inject(DestroyRef);
  isFetching = signal(false);
  error = signal('');

  ngOnInit() {
    this.isFetching.set(true);
    const subscription = this.placesService.loadAvailablePlaces()
      .subscribe({
        next: (places) => {
          this.places.set(places);
        },
        error: (error: Error) => {
          console.log(error);
          this.error.set(error.message);
        },
        complete: () => {
          this.isFetching.set(false);
        },
      });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());

    // const subscription = this.httpClient
    //   .get<{places: Place[]}>('http://localhost:3000/places', {observe: 'response'})
    //   .subscribe({
    //     next: (response) => {
    //       console.log(response)
    //       console.log(response.body?.places);
    //     },
    //   });
    // this.destroyRef.onDestroy(() => subscription.unsubscribe());

    }
    onSelectPlace(selectedPlace: Place){
      const subscription = this.placesService.addPlaceToUserPlaces(selectedPlace).subscribe({next: (resData) => console.log(resData)});

      this.destroyRef.onDestroy(() => {
        subscription.unsubscribe()
      })
    }
}
