import { Component, OnInit } from '@angular/core';
//import { Address } from './interface/address';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AddressService } from 'src/address.service';
import {Address} from './address';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  //title = 'generator-rental-service';

  public addresses: Address[] | undefined; 

  constructor(private AddressService: AddressService){

  }

  ngOnInit() {
    this.getAddress();
  }

  public getAddress(): void{
    this.AddressService.getAddress().subscribe(
      (response: Address[]) =>{
        this.addresses = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      } 
    );
  }

}
