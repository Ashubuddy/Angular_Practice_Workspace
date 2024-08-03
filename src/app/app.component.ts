import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, interval, of } from 'rxjs';
import {
  filter,
  first,
  last,
  map,
  mapTo,
  skip,
  skipLast,
  mergeMap,
  take,
  takeLast,
  concatMap,
  switchMap,
  exhaustMap,
} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  public arr = [1, 23, 10, 5, 8, 2, 9];
  public employees = [
    { firstName: 'John', lastName: 'Doe', age: 23 },
    { firstName: 'Anna', lastName: 'Smith', age: 31 },
    { firstName: 'Peter', lastName: 'Jones', age: 20 },
  ];
  public output: any;
  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {
    // const source$ = from([1, 2, 3, 4]);
    // console.log(
    //   this.arr.reduce((acc: any, curr) => {
    //     if (curr % 2 == 0) {
    //       acc.push(curr * curr);
    //     }
    //     return acc;
    //   }, [])
    // );
    // console.log(this.arr.flatMap((val) => (val % 2 == 0 ? val * val : [])));
    // source$
    //   .pipe(
    //     map((val) => val * 10),
    //     filter((val) => val > 20),
    //     last()
    //   )
    //   .subscribe((val) => {
    //     console.log(val);
    //   });
    /* reduce method
     */
    // let number = 0;
    // console.log(
    //   this.arr.reduce((val, curr) => {
    //     if (val < curr) {
    //       val = curr;
    //     }
    //     return val;
    //   }, 0)
    // );
    // this.arr.forEach((val) => {
    //   if (number < val) {
    //     number = val;
    //   }
    //   return number;
    // });
    // console.log(number);
    /* map example
     */
    // this.output = this.employees.map((emp) => {
    //   return emp.firstName + ' ' + emp.lastName;
    // });
    // console.log(this.output);
    /* filter example
     */
    // const filterFirstName = this.employees
    //   .filter((emp) => emp.age < 30)
    //   .map((emp) => {
    //     return emp.firstName;
    //   });
    // console.log(filterFirstName);
    /* reduce example
     */
    // const ageList = this.employees.reduce((acc: any, curr) => {
    //   if (acc[curr.age]) {
    //     acc[curr.age] = ++acc[curr.age];
    //   } else {
    //     acc[curr.age] = 1;
    //   }
    //   return acc;
    // }, {});
    // console.log(ageList);
    // const filterFirstNameByReduce = this.employees.reduce((acc: any, curr) => {
    //   if (curr.age < 30) {
    //     acc.push(curr.firstName);
    //   }
    //   return acc;
    // }, []);
    // console.log(filterFirstNameByReduce);
    // const fakeApi = 'https://jsonplaceholder.typicode.com/posts/{{id}}';
    // const source2$ = interval(10).pipe(skip(1), take(5));
    /* 
    mergeMap 
    */
    // source2$
    //   .pipe(
    //     mergeMap((id) => {
    //       return this.http.get(
    //         `https://jsonplaceholder.typicode.com/posts/${id}`
    //       );
    //     })
    //   )
    //   .subscribe((val) => {
    //     console.log(val);
    //   });
    /* 
    conacatMap 
    */
    // source2$
    //   .pipe(
    //     concatMap((id) => {
    //       return this.http.get(
    //         `https://jsonplaceholder.typicode.com/posts/${id}`
    //       );
    //     })
    //   )
    //   .subscribe((val) => {
    //     console.log(val);
    //   });
    /* 
    switchMap 
    */
    // source2$
    //   .pipe(
    //     switchMap((id) => {
    //       return this.http.get(
    //         `https://jsonplaceholder.typicode.com/posts/${id}`
    //       );
    //     })
    //   )
    //   .subscribe((val) => {
    //     console.log(val);
    //   });
    /* 
    exhaustMap 
    */
    // source2$
    //   .pipe(
    //     exhaustMap((id) => {
    //       return this.http.get(
    //         `https://jsonplaceholder.typicode.com/posts/${id}`
    //       );
    //     })
    //   )
    //   .subscribe((val) => {
    //     console.log(val);
    //   });
  }
}
