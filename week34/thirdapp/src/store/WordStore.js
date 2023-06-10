import { action, makeAutoObservable } from "mobx";

export default class WordStore {
    words = [];
    isLoaded = false;
    constructor() {
        makeAutoObservable(this);
    }
    @action fetchWords = async () => {
        this.isLoaded = false;
        await fetch("http://itgirlschool.justmakeit.ru/api/words")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                else {
                    throw new Error("errrrr0r")
                }
            }
            )
            .then((response) => {
                this.isLoaded = true;
                this.words = response;
            })
            .catch((error) => {
                console.log(error)
            })
    }
    @action addWords = async (word) => {
        await fetch("http://itgirlschool.justmakeit.ru/api/words/add",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(word)
            }
        )
            .catch((error) => {
                console.log(error)
            })
    }
    @action deleteWords = async (id) => {
        await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`,
            {
                method: 'POST',
            }
        )
            .catch((error) => {
                console.log(error)
            })
        this.isLoaded = false;
        await this.fetchWords()
    }


    @action editWords = async (word) => {
        await fetch(`http://itgirlschool.justmakeit.ru/api/words/${word.id}/update`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(word)
            }
        )
            .catch((error) => {
                console.log(error)
            })
        this.isLoaded = false;
        await this.fetchWords()
    }

}