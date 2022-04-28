import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EventHandlerService {
  data: any;
  constructor(private _http: HttpClient) {}
  private _url = ' http://localhost:3000/users';
  // getData() {
  //   return this._http.get(this._url);
  // }

  userDetails = [
    {
      name: 'ertyrtre',
      id: 1,
      title: 'accusamus beatae ad facilis cum similique qui sunt',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'gfjfg',
      id: 2,
      title: 'reprehenderit est deserunt velit ipsam',
      url: 'https://via.placeholder.com/600/771796',
      thumbnailUrl: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'xgnfgxh',
      id: 3,
      title: 'officia porro iure quia iusto qui ipsa ut modi',
      url: 'https://via.placeholder.com/600/24f355',
      thumbnailUrl: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'ghjdghj',
      id: 4,
      title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
      url: 'https://via.placeholder.com/600/d32776',
      thumbnailUrl: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'vfbfghsfh',
      id: 5,
      title: 'natus nisi omnis corporis facere molestiae rerum in',
      url: 'https://via.placeholder.com/600/f66b97',
      thumbnailUrl: 'https://via.placeholder.com/150/f66b97',
    },
    {
      name: 'dzftgdfg',
      id: 6,
      title: 'accusamus ea aliquid et amet sequi nemo',
      url: 'https://via.placeholder.com/600/56a8c2',
      thumbnailUrl: 'https://via.placeholder.com/150/56a8c2',
    },
    {
      name: 'hjkljkl',
      id: 7,
      title: 'officia delectus consequatur vero aut veniam explicabo molestias',
      url: 'https://via.placeholder.com/600/b0f7cc',
      thumbnailUrl: 'https://via.placeholder.com/150/b0f7cc',
    },
    {
      name: 'hjkfhkh',
      id: 8,
      title: 'aut porro officiis laborum odit ea laudantium corporis',
      url: 'https://via.placeholder.com/600/54176f',
      thumbnailUrl: 'https://via.placeholder.com/150/54176f',
    },
    {
      name: 'fghfh',
      id: 9,
      title: 'qui eius qui autem sed',
      url: 'https://via.placeholder.com/600/51aa97',
      thumbnailUrl: 'https://via.placeholder.com/150/51aa97',
    },
  ];

  getData() {
    return of(this.userDetails);
  }
}
