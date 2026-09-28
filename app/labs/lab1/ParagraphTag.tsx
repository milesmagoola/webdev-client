export default function ParagraphTag() {
  return (
    <div id="wd-p-tag">
      <h4>Paragraph Tag</h4>
      <p id="wd-p-1">
        This is a paragraph. We often separate a long set of sentences with
        vertical spaces to make the text easier to read. Browsers ignore
        vertical white spaces and render all the text as one single set of
        sentences. To force the browser to add vertical spacing, wrap the
        paragraphs you want to separate with the paragraph tag
      </p>
      <p id="wd-p-2">
        This is the first paragraph. The paragraph tag is used to format
        vertical gaps between long pieces of text like this one.
      </p>
      <p id="wd-p-3">
        This is the second paragraph. Even though there is a deliberate white
        gap between the paragraph above and this paragraph, by default
        browsers render them as one contiguous piece of text as shown here on
        the right.
      </p>
      <p id="wd-p-4">
        This is the third paragraph. Wrap each paragraph with the paragraph
        tag to tell browsers to render the gaps.
      </p>

      <p id="wd-p-your-1">
        I aspire to carve out a space online for my fellow black sheep, and 
        shift the social impact and activist space to be more inclusive and 
        accessible for marginalized communities and allies alike. I want to 
        tell the stories that I needed as a kid, using animation, music, fashion, 
        and coding. And finally, I&apos;d love to make this small business, content creation, 
        and freelance work my full-time job post-grad!
      </p>
      <p id="wd-p-your-2">
        I&apos;m developing STUDIO KABILITO in part as my senior capstone! I&apos;m working
        on a musical short film that&apos;ll kickstart an ARG hosted on the brand&apos;s website
        - incorporating the brand&apos;s inaugural jewelry collection and Issue #3 of its
        feminism-meets-pop-culture magazine KABIZINE.
      </p>

      <p id="wd-ai-p">
        Wrapping text in a paragraph tag creates vertical spacing because
        browsers apply default top and bottom margins to the p element,
        pushing it away from the content around it. Without that tag, the
        browser has no block-level boundary to attach margins to, so it
        collapses adjacent text into one continuous run instead.
      </p>
    </div>
  );
}