import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  constructor(private http:HttpClient) {

  }

  getTranslateWord(word: string) {
    const url = `https://dictionary.skyeng.ru/api/public/v1/words/search?search=${word}&pageSize=1`
    return this.http.get(url)
  }
}
