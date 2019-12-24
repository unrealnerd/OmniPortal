import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ExplorerService {
    
    apiResponseSubject = new Subject<any>();

}