// word-search.component.ts
import { Component, AfterViewInit, Renderer2 } from '@angular/core';


declare function wordSearch(gameAreaEl:any): any; // Import the wordSearch function


@Component({
  selector: 'app-word-search',
  templateUrl: './word-search.component.html',
  styleUrls: ['./word-search.component.css'],
})


export class WordSearchComponent implements AfterViewInit {

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    
    var gameAreaEl = document.getElementById('ws-area');
    var gameobj = wordSearch(gameAreaEl); // Call the wordSearch function

    // Put words into `.ws-words`
    const words = gameobj.settings.wordsList;
    var wordsWrap = document.querySelector('.ws-words');
    for (const word of words) {
      var liEl = this.renderer.createElement('li');
      this.renderer.addClass(liEl, 'ws-word');
      const text = this.renderer.createText(word);
      this.renderer.appendChild(liEl, text);
      this.renderer.appendChild(wordsWrap, liEl);
    }

    document.addEventListener('myEvent',()=>{
      console.log('here it is')
    });

  }

 


}
