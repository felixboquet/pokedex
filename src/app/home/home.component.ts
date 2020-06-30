import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../shared/pokemon/pokemon.model";
import pokemonJson from "../datas/pokemon.json";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})

export class HomeComponent implements OnInit {

    pokemonList: Pokemon[] = [];

    constructor() {
      // this.pokemonList = [
      //   {
      //     id: 0,
      //     name: 'Pikachu',
      //     imageSrc: "https://i.pinimg.com/originals/f5/1d/08/f51d08be05919290355ac004cdd5c2d6.png"
      //   },
      //   {
      //     id: 1,
      //     name: 'Salameche',
      //     imageSrc: "https://www.geeknplay.fr/wp-content/uploads/2019/11/Salam%C3%A8che.jpg"
      //   }
      // ]

      for (var mPokemon of pokemonJson) {
          let pokemon = new Pokemon(mPokemon.id, mPokemon.name, mPokemon.img);

          this.pokemonList.push(pokemon);
      }

    }

    ngOnInit(): void {
    }


}
