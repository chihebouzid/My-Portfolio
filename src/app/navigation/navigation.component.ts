import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  ViewChild
} from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { slideInAnimation } from "../animation";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"],
  animations: [slideInAnimation]
})
export class NavigationComponent implements OnInit {
  btnIcon: string = "+";
  btnIcinToggle = true;

  @ViewChild("navButton") navButton: ElementRef;
  @HostListener("window:click", ["$event"]) onClick(event) {
    if (!this.navButton.nativeElement.contains(event.target)) {
      this.onCloseNav();
    }
  }

  public wrapperClasses = {
    "cn-wrapper": true,
    "opened-nav": false
  };
  public overlayClasses = {
    "cn-overlay": true,
    "on-overlay": false
  };

  constructor(private element: ElementRef) {}

  ngOnInit() {}

  onOpenNav() {
    this.btnIcinToggle = !this.btnIcinToggle;
    this.btnIcon = this.btnIcinToggle ? "+" : "-";
    this.wrapperClasses["opened-nav"] = !this.wrapperClasses["opened-nav"];
    this.overlayClasses["on-overlay"] = !this.overlayClasses["on-overlay"];
  }

  onCloseNav() {
    this.btnIcinToggle = true;
    this.btnIcon = "+";
    this.wrapperClasses["opened-nav"] = false;
    this.overlayClasses["on-overlay"] = false;
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
}
