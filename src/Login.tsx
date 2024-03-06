import * as stylex from "@stylexjs/stylex"
import { spacing, colors} from "./tokens.stylex";
import { useState } from "react";

const style = stylex.create({
  page: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  inputs: {
    color: colors.primaryText,
    height: "20px",
    fontSize: "16px",
    width: "80%",
    padding: "8px",
    background: colors.background,
    borderWidth: "2px",
    outlineWidth: '0px',
    borderColor: {
        default:colors.primaryText,
    },
    borderRadius: "6px",
    margin: spacing.sm,
  },
  buttons: {
    fontSize: "16px",
    color: colors.primaryText,
    backgroundColor: colors.accent,
    borderRadius: "6px",
    padding: "8px",
    border: '0cap',
    margin: spacing.sm,
    boxShadow: '2px'
  },
});


export default function LogIn(){

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    return(
        <div {...stylex.props(
            style.page,
        )}>
            <input placeholder="Login" type="email" value={login} onChange={(e)=>{ setLogin(e.target.value)}} {...stylex.props(
                style.inputs
            )}/>
            <input placeholder="Password" type="password" value={password} onChange={(e)=>{ setPassword(e.target.value)}} {...stylex.props(
                style.inputs
            )}/>
            <button onClick={() => console.log(login)}{...stylex.props(style.buttons)}>click me</button>
        </div>
    )
}