import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {take} from "rxjs/operators";
import {MatDialog} from "@angular/material";
import {ResultsComponent} from "../results/results.component";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  funciones = [
    {func: '𝑓(𝑥, 𝑦) = 3𝑥² + 2𝑥𝑦 − 5𝑦²', option: 1},
    {func: '𝑓(𝑥, 𝑦) = (𝑥² − 3𝑥 + 𝑦³)𝑠𝑒𝑛(|𝑥 − 𝑦|) − 𝑐𝑜𝑠(|𝑥 − 𝑦|)', option: 2},
    {func: '𝑓(𝑥, 𝑦) = −(𝑥 ∗ 𝑠𝑖𝑛²(𝑥) ∗ 𝑐𝑜𝑠³(𝑥)) + (𝑦 ∗ 𝑠𝑖𝑛²(𝑦) ∗ 𝑐𝑜𝑠³(𝑦))', option: 3},
    {func: '𝑓(𝑥, 𝑦) = |𝑠𝑖𝑛(𝑥) + 𝑐𝑜𝑠(𝑦) + √(|𝑥 − 𝑦|)|', option: 4}];

  dataGroup: FormGroup;
  constructor(private fb: FormBuilder,
              private router: Router,
              private dialog: MatDialog,
              private http: HttpClient) { }

  ngOnInit() {
    this.dataGroup = this.fb.group({
      func: [undefined, [Validators.required]],
      elitism: [0, [Validators.required]],
      generations: [0, [Validators.required]],
      population: [0, [Validators.required]],
      umbrali: [0.0, [Validators.required]],
      crossover: [0.0, [Validators.required]],
      mutation: [0.0, [Validators.required]],
    })
  }

  get func() { return this.dataGroup.get('func').value; }
  get elitism() { return this.dataGroup.get('elitism').value; }
  get generations() { return this.dataGroup.get('generations').value; }
  get population() { return this.dataGroup.get('population').value; }
  get umbrali() { return this.dataGroup.get('umbrali').value; }
  get crossover() { return this.dataGroup.get('crossover').value; }
  get mutation() { return this.dataGroup.get('mutation').value; }

  set func(value) { this.dataGroup.setValue(value); }
  set elitism(value) { this.dataGroup.setValue(value); }
  set generations(value) { this.dataGroup.setValue(value); }
  set population(value) { this.dataGroup.setValue(value); }
  set umbrali(value) { this.dataGroup.setValue(value); }
  set crossover(value) { this.dataGroup.setValue(value); }
  set mutation(value) { this.dataGroup.setValue(value); }

  resetFields() {
    this.func = undefined;
    this.elitism = 0;
    this.generations = 0;
    this.population = 0;
    this.umbrali = 0.0;
    this.crossover = 0.0;
    this.mutation = 0.0;
  }

  calcAlgorithm() {
    const ans = {
      func: this.func,
      elitism:  Number(this.elitism),
      generations:  Number(this.generations),
      population:  Number(this.population),
      umbral:  Number(this.umbrali),
      crossover:  Number(this.crossover),
      mutation:  Number(this.mutation)
    }
    console.log('Struct before', ans);
    this.http.post('https://basicga.appspot.com/startga', ans).pipe(take(1)).subscribe(
      res => {
        this.dialog.open(ResultsComponent, {
          data: {
            data: res,
            func: this.funciones[this.func - 1].func,
          }
        });
      // console.log('Server response', res);
      // const resultsJson = JSON.stringify(res);
      // this.router.navigate(['/results', resultsJson])
    })
  }

}
