import { InjectionToken, Injectable, Inject } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { Product } from "./product.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, delay } from "rxjs/operators";


export const REST_URL = new InjectionToken("rest_url");

@Injectable()
export class RestDataSource {
  constructor(
    private http: HttpClient,
    @Inject(REST_URL) private url: string
  ) {}

  getData(): Observable<Product[]> {
    return this.sendRequest<Product[]>("GET", this.url);
    }
    
  saveProduct(product: Product): Observable<Product> {
    return this.sendRequest<Product>("POST", this.url, product);
  }
  updateProduct(product: Product): Observable<Product> {
    return this.sendRequest<Product>(
      "PUT",
      `${this.url}/${product.id}`,
      product
    );
  }
  deleteProduct(id: number): Observable<Product> {
    return this.sendRequest<Product>("DELETE", `${this.url}/${id}`);
  }

  private sendRequest<T>(
    verb: string,
    url: string,
    body?: Product
  ): Observable<T> {
    return this.http.request<T>(verb, url, {
      body: body,
      headers: new HttpHeaders({
        "Access-Key": "<secret>",
        "Application-Name": "exampleApp"
      })
    })
    .pipe(catchError((error: Response) => throwError(`Network Error: ${error.statusText} ${error.status}`)));
  }
}
