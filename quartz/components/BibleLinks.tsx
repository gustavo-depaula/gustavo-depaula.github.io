import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import script from "./scripts/biblelinks.inline"

export default (() => {
  const BibleLinks: QuartzComponent = ({}: QuartzComponentProps) => {
    return null
  }

  BibleLinks.afterDOMLoaded = script

  return BibleLinks
}) satisfies QuartzComponentConstructor<{}>
