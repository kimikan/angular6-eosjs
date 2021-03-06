import { Injectable } from '@angular/core';
import * as Eos from 'eosjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EosService {
  public eos: any;

  constructor() {
    this.eos = Eos.Localnet({
      httpEndpoint: environment.blockchainUrl
    })
  }
}
