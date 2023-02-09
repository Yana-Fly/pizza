import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {from, map, Observable, Subject, Subscription} from "rxjs";
import {CartService} from "../../../shared/services/cart.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PopupComponent} from "../../../shared/components/popup/popup.component";
import {environment} from "../../../../environments/environment";

// declare var bootstrap: any;
// import * as bootstrap from "bootstrap";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {

  private observable: Observable<number>;
  private promise: Promise<string>;
  private subscription: Subscription | null = null;
  private subject: Subject<number>;

  // @ViewChild('popup')
  // popup!: TemplateRef<ElementRef>;

  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent;

  constructor(public cartService: CartService,
              private modalService: NgbModal) {
    this.subject = new Subject<number>();
    let count = 0;
    const interval = setInterval(() => {
      this.subject.next(count++);
    }, 1000);
    const timeout1 = setTimeout(() => {
      this.subject.complete();
    }, 4000);


    this.promise = new Promise<string>(resolve => {
      setTimeout(() => {
        resolve('hello');
      }, 2000);
    });

    this.observable = from([1, 2, 3, 4, 5]);
  }

  ngOnInit() {
    // const myModalAlternative = new bootstrap.Modal('#myModal', {});
    // myModalAlternative.show();

    this.subscription = this.subject
      .subscribe({
        next: (param: number) => {
          console.log('subscriber 1: ', param);
        },
        error: (error: string) => {
          console.log('ERROR: ' + error);
        }
      });
  }

  ngAfterViewInit() {
    // this.modalService.open(this.popup, {});

    // const modalRef = this.modalService.open(PopupComponent);
    // modalRef.componentInstance.data = 'Main component';

    // this.popupComponent.open();
    console.log('hello');
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  test(popup: TemplateRef<ElementRef>) {
    // this.modalService.open(popup, {});

    this.subject
      .pipe(
        map((number) => {
          return 'Число:' + number;
        })
      )
      .subscribe((param: string) => {
        console.log('subscriber 2: ', param);
      });
  }


}
