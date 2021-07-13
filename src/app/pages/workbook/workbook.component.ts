import { Component, OnInit } from '@angular/core';
import {PostDataService} from '../../post-data.service'

interface IWord {
  id: number;
  engWord: string;
  translateWord: string;
}


@Component({
  selector: 'app-workbook',
  templateUrl: './workbook.component.html',
  styleUrls: ['./workbook.component.scss']
})
export class WorkbookComponent implements OnInit {
  newWord: string = ''
  wordsList: Array<IWord> = []

  constructor(private post: PostDataService) { 
    
  }

  addWord(){
    this.post.getTranslateWord(this.newWord).subscribe((data: any)=> {
      console.log("Data = ", data)
      if(!!data.length){
        const newWord :IWord = {
          id: Date.now(),
          engWord: this.newWord,
          translateWord: `${data[0]?.meanings[0]?.translation?.text}` ,
        }
    
        this.wordsList.unshift(newWord)
      }
      this.newWord = ''
    })
  }



  ngOnInit(): void {
  }

}
