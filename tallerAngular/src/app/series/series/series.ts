import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Serie } from '../serie';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './series.html',
  styleUrls: ['./series.css']
})

export class SeriesComponent implements OnInit {
  series: Serie[] = [];
  averageSeasons = 0;

  selectedSerie: Serie | null = null;

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe({
      next: (data: Serie[]) => {
        this.series = data;

        //Cálculo del promedio
        let suma = 0;
        let contador = 0;

        for (let i = 0; i < this.series.length; i++) {
          suma = suma + this.series[i].seasons; // acumulamos
          contador = contador + 1;              // contamos
        }

        if (contador > 0) {
          this.averageSeasons = suma / contador;
        } else {
          this.averageSeasons = 0;
        }
        
      },
      error: (e: HttpErrorResponse) => console.error('Error cargando series.json', e)
    });
  }

    selectSerie(s: Serie): void {
    this.selectedSerie = s;
}
}