import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../shared/model/pokemon.model";
import pokemonJson from "../datas/pokemon.json";
import { Observable, PropertyChangeData } from "tns-core-modules/data/observable";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { EventData } from "tns-core-modules/data/observable";
import { Page, NavigatedData } from "tns-core-modules/ui/page";


@Component({
    selector: "Home",
    templateUrl: "./home.component.xml",
    styleUrls: ["./home.component.css"]
})

export class HomeComponent implements OnInit {

    // --- Global var
    allPokemonList: Pokemon[] = [];
    filteredPokemonList: Pokemon[] = [];


    // --- Constructor

    constructor() {

        // Fill the pokemon list from the json file
        for (var mPokemon of pokemonJson) {
            let pokemon = new Pokemon(mPokemon.id, mPokemon.name, mPokemon.img, mPokemon.type);

            this.allPokemonList.push(pokemon);
        }

        // On init, the filtered list contains all pokemon
        this.filteredPokemonList = this.allPokemonList;

    }

    ngOnInit(): void {}

    // --- SearchBar delegate methods

    public onTextChange(args) {
        let searchBar = <SearchBar>args.object;
        this.onSearch(searchBar.text ? searchBar.text.toLowerCase() : "");
    }

    // Fill the filtered list with all pokemon when the search bar is cleared
    public onClear(args) {
        let searchBar = <SearchBar>args.object;
        searchBar.text = "";
        this.filteredPokemonList = [];
        this.allPokemonList.forEach(item => {
            this.filteredPokemonList.push(item);
        });
        searchBar.dismissSoftInput();
    }

    // --- Private methods

    // Search the text in the name, the id and the type
    private onSearch(searchValue) {
        if (searchValue !== "") {
            this.filteredPokemonList = this.allPokemonList.filter((e) => {
                return (e.name && e.id && e.type) &&
                    (e.name.toLowerCase().includes(searchValue)
                    || e.id.toLowerCase().includes(searchValue)
                    || this.containsType(e.type, searchValue));
            });
        }
    }

    // Return true if searchValue is in pokemon's types
    private containsType(types: string[], searchValue): boolean {
        var contains = false;
        types.forEach((type) => {
          if (type.toLowerCase().includes(searchValue)) {
            contains = true;
          }
        })

        return contains;
    }

}
