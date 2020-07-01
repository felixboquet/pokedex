import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../shared/model/pokemon.model";
import pokemonJson from "../datas/pokemon.json";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})

export class HomeComponent implements OnInit {

    pokemonList: Pokemon[] = [];

    constructor() {

      for (var mPokemon of pokemonJson) {
          let pokemon = new Pokemon(mPokemon.id, mPokemon.name, mPokemon.img, mPokemon.type);

          this.pokemonList.push(pokemon);
      }

    }

    ngOnInit(): void {
    }


}
