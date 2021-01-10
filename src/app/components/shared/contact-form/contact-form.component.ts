import {
  Component,
  OnInit,
  ElementRef,
  ViewChildren,
  QueryList,
} from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MessageService } from "../../../services/message.service";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
})
export class ContactFormComponent implements OnInit {
  @ViewChildren("span") span: QueryList<ElementRef>;
  @ViewChildren("input") input: QueryList<ElementRef>;
  form: FormGroup;
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.email, Validators.required]),
      phone: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
      ]),
      message: new FormControl("", [
        Validators.required,
        Validators.maxLength(256),
      ]),
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    if (this.form.valid) {
      this.messageService.sendMessage(this.form.value).subscribe(() => {
        // Swal.fire({
        //   position: "center",
        //   icon: "success",
        //   title: "The message has been sent successfully",
        //   showConfirmButton: false,
        //   timer: 1500,
        // });
      });
    }
  }

  inputChange(i: number) {
    if (this.input.toArray()[i].nativeElement.value !== "") {
      this.span.toArray()[i].nativeElement.classList.add("input--filled");
    } else {
      this.span.toArray()[i].nativeElement.classList.remove("input--filled");
    }
  }
}
