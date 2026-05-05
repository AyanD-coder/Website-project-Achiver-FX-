type SanitizeCmsHtmlOptions = {
  demoteH1To?: 2 | 3 | 4 | 5 | 6;
};

const dangerousElementPattern =
  /<\s*(script|style|iframe|object|embed|form|input|button|textarea|select|link|meta)\b[^>]*>[\s\S]*?<\s*\/\s*\1\s*>|<\s*(script|style|iframe|object|embed|form|input|button|textarea|select|link|meta)\b[^>]*\/?\s*>/gi;

const dangerousAttributePattern =
  /\s(?:on[a-z]+|srcdoc)\s*=\s*(".*?"|'.*?'|[^\s>]+)/gi;

const unsafeUrlAttributePattern =
  /\s(href|src|xlink:href)\s*=\s*(["'])\s*(?:javascript|data:text\/html)[^"']*\2/gi;

const inlineStylePattern = /\sstyle\s*=\s*(".*?"|'.*?'|[^\s>]+)/gi;

export function sanitizeCmsHtml(
  html = "",
  { demoteH1To = 2 }: SanitizeCmsHtmlOptions = {},
) {
  const targetHeading = `h${demoteH1To}`;

  return html
    .replace(dangerousElementPattern, "")
    .replace(dangerousAttributePattern, "")
    .replace(unsafeUrlAttributePattern, "")
    .replace(inlineStylePattern, "")
    .replace(/<\s*h1(\s[^>]*)?>/gi, `<${targetHeading}$1>`)
    .replace(/<\s*\/\s*h1\s*>/gi, `</${targetHeading}>`);
}
