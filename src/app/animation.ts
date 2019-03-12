import {
  animation,
  trigger,
  animateChild,
  group,
  transition,
  animate,
  style,
  query
} from "@angular/animations";

export const slideInAnimation = trigger("routeAnimations", [
  transition("* <=> AboutPage", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      })
    ]),
    query(":enter", [style({ left: "-100%" })]),
    query(":leave", animateChild()),
    group([
      query(":leave", [
        animate("1s cubic-bezier(.5, -0.005, 0.2, 1)", style({ left: "100%" }))
      ]),
      query(":enter", [
        animate("1s cubic-bezier(.5, -0.005, 0.2, 1)", style({ left: "0%" }))
      ])
    ]),
    query(":enter", animateChild())
  ]),

  transition("* <=> contact", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      })
    ]),
    query(":enter", [style({ left: "-100%" })]),
    query(":leave", animateChild()),
    group([
      query(":leave", [
        animate("1s cubic-bezier(.5, -0.005, 0.2, 1)", style({ left: "100%" }))
      ]),
      query(":enter", [
        animate("1s cubic-bezier(.5, -0.005, 0.2, 1)", style({ left: "0%" }))
      ])
    ]),
    query(":enter", animateChild())
  ]),

  transition("* <=> web", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      })
    ]),
    query(":enter", [style({ left: "-100%" })]),
    query(":leave", animateChild()),
    group([
      query(":leave", [
        animate("1s cubic-bezier(.5, -0.005, 0.2, 1)", style({ left: "100%" }))
      ]),
      query(":enter", [
        animate("1s cubic-bezier(.5, -0.005, 0.2, 1)", style({ left: "0%" }))
      ])
    ]),
    query(":enter", animateChild())
  ]),

  transition("* <=> visuels", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      })
    ]),
    query(":enter", [style({ left: "-100%" })]),
    query(":leave", animateChild()),
    group([
      query(":leave", [
        animate("1s cubic-bezier(.5, -0.005, 0.2, 1)", style({ left: "100%" }))
      ]),
      query(":enter", [
        animate("1s cubic-bezier(.5, -0.005, 0.2, 1)", style({ left: "0%" }))
      ])
    ]),
    query(":enter", animateChild())
  ]),

  transition("* <=> HomePage", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      })
    ]),
    query(":enter", [style({ left: "-100%" })]),
    query(":leave", animateChild()),
    group([
      query(":leave", [
        animate("1s cubic-bezier(.5, -0.005, 0.2, 1)", style({ left: "100%" }))
      ]),
      query(":enter", [
        animate("1s cubic-bezier(.5, -0.005, 0.2, 1)", style({ left: "0%" }))
      ])
    ]),
    query(":enter", animateChild())
  ])
]);
