import { completeLogin } from "@/utils/auth"

import Router from "next/router"
import { useEffect } from "react"
import Image from "next/image"
import { Flex } from "@chakra-ui/react"

export default function Page() {
  useEffect(() => {
    completeLogin()
      .then(() => {
        let token = localStorage.getItem("tokenSet")
        if (token) {
          let uuid = JSON.parse(token).uuid
          Router.replace("/me/" + uuid)
        }
      })
      .catch((error: {}) => {
        console.error(error)
        Router.replace("/")
      })
  }, [])

  return (
    <Flex justifyContent="center" style={{ paddingTop: "40vh" }}>
      <Image width="200px" height="200px" src="/loading.gif" alt="Loading..." />
    </Flex>
  )
}
