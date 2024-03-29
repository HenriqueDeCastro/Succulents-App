import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICalculateShipping } from 'src/app/shared/models/icalculate-shipping';
import { IPackageShipping } from 'src/app/shared/models/ipackage-shipping';

const URL_API_MELHOR_ENVIO = 'https://www.melhorenvio.com.br';
const TOKEN_MELHOR_ENVIO = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBhMTI0MGE5MTFkZTI2NWViZDE5YjA5OGY2ODNjMDIwNDU2OTlhZmU3N2I5ZjYzMDk3MGMxODdmNTNjZTUzMmNiNjExZTEwOWQxYmQ4ZDEwIn0.eyJhdWQiOiIxIiwianRpIjoiMGExMjQwYTkxMWRlMjY1ZWJkMTliMDk4ZjY4M2MwMjA0NTY5OWFmZTc3YjlmNjMwOTcwYzE4N2Y1M2NlNTMyY2I2MTFlMTA5ZDFiZDhkMTAiLCJpYXQiOjE2MDk5ODI4NTMsIm5iZiI6MTYwOTk4Mjg1MywiZXhwIjoxNjQxNTE4ODUzLCJzdWIiOiJhYTFmNjY5Yi02ODM1LTQ5YjctODMyYy02ODk0ZWEwZWE1OWQiLCJzY29wZXMiOlsiY2FydC1yZWFkIiwiY2FydC13cml0ZSIsImNvbXBhbmllcy1yZWFkIiwiY29tcGFuaWVzLXdyaXRlIiwiY291cG9ucy1yZWFkIiwiY291cG9ucy13cml0ZSIsIm5vdGlmaWNhdGlvbnMtcmVhZCIsIm9yZGVycy1yZWFkIiwicHJvZHVjdHMtcmVhZCIsInByb2R1Y3RzLWRlc3Ryb3kiLCJwcm9kdWN0cy13cml0ZSIsInB1cmNoYXNlcy1yZWFkIiwic2hpcHBpbmctY2FsY3VsYXRlIiwic2hpcHBpbmctY2FuY2VsIiwic2hpcHBpbmctY2hlY2tvdXQiLCJzaGlwcGluZy1jb21wYW5pZXMiLCJzaGlwcGluZy1nZW5lcmF0ZSIsInNoaXBwaW5nLXByZXZpZXciLCJzaGlwcGluZy1wcmludCIsInNoaXBwaW5nLXNoYXJlIiwic2hpcHBpbmctdHJhY2tpbmciLCJlY29tbWVyY2Utc2hpcHBpbmciLCJ0cmFuc2FjdGlvbnMtcmVhZCIsInVzZXJzLXJlYWQiLCJ1c2Vycy13cml0ZSIsIndlYmhvb2tzLXJlYWQiLCJ3ZWJob29rcy13cml0ZSJdfQ.YG-k8MPVoeFqGCHezCMV3FCub9EcwTHKTQnLitOzrVS0MZU3Btk5iMjHAOtYRU23LpZQCGxTTLxs0oLkrQJ7P_6KKczYvB_ji8DhcoqmJpr4agAiFkqp0m3LjYD2iy8oKMt08JqRR7V30zad3oNWB4BCqv5i4KPciDNCQK-Bi3NmZ-M4YQb_0MTIzqWj0CgDBkJtBpcOvjQc1L2n2NPkrF5hs_KITmJr5SdG4QzQnNq129GN3Ezl163BZZZkyeOwJXHTSEoEkNcVRvrHKn1oSh4J9CSyPnAxOWhVi_CHhMLkl2x3_nrEwG-HVr4nb5zrJaK4FHa7LF3rTTUHs4y1O-_sFuKjm77pqAd_HFHq3MEb0iDbAzvUJC4DjjbQXAwTjUQDZGWaXLJnQjkuke4SPRQLV6XA3w3OlpzlieXE4puFsognKP34PcvA-POZyXdCNv9uvcPa8zKVN49JfHyoP-hQ2G9mdL4kfeKmLm2O76W_bc8kdQV6iIc5fPzm70l5fTWT3m34j8uYPJXTOsd_H3pfUoHEfIKngt9iKTKpZoZ3-i8fabQ4YstETjAcr7ihKB1k46wENEHlc3vDSxwhWZR5dA6DLQK00xmlR_fXRE42BMRJulFfu6Un6KpjxN5Wc44pI4ft-5C_SLKl6aKZCYwBfn_q2ljNRCp-8uC1qng'
const CEP = '09320-760';

@Injectable({
  providedIn: 'root'
})
export class MelhorEnvioService {

  constructor(private http: HttpClient) {}

  calculateShippingPackage(cepClient: string): Observable<ICalculateShipping>  {

    let pacoteFrete: IPackageShipping = {
      from: {
        postal_code: `${CEP}`
      },
      to: {
        postal_code: cepClient
      },
      package: {
        height: 22,
        width: 22,
        length: 22,
        weight: 1.5
      },
      services: '3'
    }

    const raw = JSON.stringify(pacoteFrete);

    const reqHeader = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':  `Bearer ${TOKEN_MELHOR_ENVIO}`,
      'User-Agent': 'Aplicação suculentasdarô@gmail.com'
   });

    return this.http.post<ICalculateShipping>(`${URL_API_MELHOR_ENVIO}/api/v2/me/shipment/calculate`, raw, {headers: reqHeader});
  }

  calculateShippingPackageAllServices(cepClient: string): Observable<ICalculateShipping[]>  {

    let pacoteFrete: IPackageShipping = {
      from: {
        postal_code: `${CEP}`
      },
      to: {
        postal_code: cepClient
      },
      package: {
        height: 22,
        width: 22,
        length: 22,
        weight: 1.5
      },
      services: '1,2,3,4'
    }

    const raw = JSON.stringify(pacoteFrete);

    const reqHeader = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':  `Bearer ${TOKEN_MELHOR_ENVIO}`,
      'User-Agent': 'Aplicação suculentasdarô@gmail.com'
   });

    return this.http.post<ICalculateShipping[]>(`${URL_API_MELHOR_ENVIO}/api/v2/me/shipment/calculate`, raw, {headers: reqHeader});
  }
}
