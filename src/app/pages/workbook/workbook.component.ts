import { Component, OnInit } from '@angular/core';
import {PostDataService} from '../../post-data.service'

interface IWord {
  id: number;
  engWord: string;
  translateWord: string;
}


const initial: IWord[] = [
  {id: 1, engWord: 'Hello', translateWord: 'Привет'}
]


@Component({
  selector: 'app-workbook',
  templateUrl: './workbook.component.html',
  styleUrls: ['./workbook.component.scss']
})
export class WorkbookComponent implements OnInit {
  newWord: string = ''
  wordsList: Array<IWord> = []

  constructor(private post: PostDataService) { 
    this.wordsList = initial
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

  closeItem(id:number){
    const newWordList = this.wordsList.filter((item: IWord) => item.id !== id)
    this.wordsList = newWordList 
  }



  ngOnInit(): void {
  }

}
