import '../styles/index.scss'
import React from "react"
import {Intro} from "../components/intro"
import {Box} from "../components/box"
import {Video} from "../components/video"
import { Layout } from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Intro/>
      <Box title="Videos Recentes">
        <div className="columns">
        <Video className="column" title="titulo do video" src="#"/>
        <Video className="column" title="titulo do video" src="#"/>
        <Video className="column" title="titulo do video" src="#"/>
        </div>
      </Box>
      </Layout>
  )
}
