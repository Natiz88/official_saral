import React from 'react'
import ExternalLink from "../assets/externalLink.svg";

const DesignLinks = () => {
  return (
    <div className="text-sm text-center text-blue-800 underline underline-offset-4 mt-[1rem] md:flex md:gap-2">
              <div>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  className=""
                >
                  Submit your design requirement
                </a>
              </div>
              <div className="flex">
                <a href="https://www.facebook.com" target="_blank">
                  Need Help?
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  className="flex"
                >
                  Ask on WhatsApp
                  <img src={ExternalLink} alt="" className="w-[18px]" />
                </a>
              </div>
            </div>
  )
}

export default DesignLinks