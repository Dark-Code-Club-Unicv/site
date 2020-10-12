import React from "react"
import "./bulma.module.scss"

export function Box({ title, children }) {
  return (
    <div className="section has-background-dark has-text-light">
      <div className="has-text-centered is-size-4">{title}</div>
      <div className="section container">{children}</div>
    </div>
  )
}
