import markdownItMedia from "@gotfeedback/markdown-it-media";
import MarkdownIt from "markdown-it";
import markdownAttrs from "markdown-it-attrs";

const options = {
  controls: true,
  attrs: {
    image: { lazy: "true" },
    video: { controls: "true" },
    audio: { preload: "metadata", controls: "true" },
  },
};

const md = MarkdownIt()
  .use(markdownAttrs)
  .use(markdownItMedia, options)
  .use(youtubeEmbed);

export default function markdown(description = "") {
  const result = md.render(description);

  return result;
}

function youtubeEmbed(md) {
  const YOUTUBE_REGEXP = /@\[youtube\]\((.*?)\)/;

  function youtubeEmbedToken(state, silent) {
    const pos = state.pos;
    const match = state.src.slice(pos).match(YOUTUBE_REGEXP);

    if (!match) return false;

    if (!silent) {
      const token = state.push("youtube_embed", "", 0);
      token.attrs = [["src", match[1]]];
    }

    state.pos += match[0].length;
    return true;
  }

  md.inline.ruler.before("emphasis", "youtube_embed", youtubeEmbedToken);
  md.renderer.rules.youtube_embed = function (tokens, idx) {
    const videoID = tokens[idx].attrs[0][1];
    return `<iframe width="382" height="215" src="https://www.youtube.com/embed/${videoID}" frameborder="0" allowfullscreen></iframe>`;
  };
}