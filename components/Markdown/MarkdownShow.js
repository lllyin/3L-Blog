import React, { Component } from 'react';

const Remarkable = require('remarkable');
const hljs = require('highlight.js'); // https://highlightjs.org/

const md = new Remarkable('full', {
  html: false, // Enable HTML tags in source
  xhtmlOut: false, // Use '/' to close single tags (<br />)
  breaks: false, // Convert '\n' in paragraphs into <br>
  langPrefix: 'language-', // CSS language prefix for fenced blocks
  linkify: true, // autoconvert URL-like texts to links
  linkTarget: '', // set target to open link in

  // Enable some language-neutral replacements + quotes beautification
  typographer: false,

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
  quotes: '“”‘’',

  // Highlighter function. Should return escaped HTML,
  // or '' if input not changed
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (error) {
        console.log(error);
      }
    }

    try {
      return hljs.highlightAuto(str).value;
    } catch (error) {
      console.log(error);
    }

    return ''; // use external default escaping
  },
});

// Beautify output of parser for html content
md.renderer.rules.table_open = () => {
  return '<table class="table table-striped">\n';
};

//
// Inject line numbers for sync scroll. Notes:
//
// - We track only headings and paragraphs on first level. That's enougth.
// - Footnotes content causes jumps. Level limit filter it automatically.
//

md.renderer.rules.paragraph_open = (tokens, idx) => {
  if (tokens[idx].lines && tokens[idx].level === 0) {
    const [line] = tokens[idx].lines;
    return '<p class="line" data-line="' + line + '">';
  }
  return '<p>';
};

md.renderer.rules.heading_open = (tokens, idx) => {
  if (tokens[idx].lines && tokens[idx].level === 0) {
    const line = tokens[idx].lines;
    return '<h' + tokens[idx].hLevel + ' class="line" data-line="' + line + '">';
  }
  return '<h' + tokens[idx].hLevel + '>';
};

export default class MarkdownShow extends Component {
  createMarkup = (mdString) => {
    return { __html: md.render(mdString) };
  }

  render() {
    const { mdString, className, style } = this.props;
    return (
      <div
        className={className}
        style={style}
        dangerouslySetInnerHTML={this.createMarkup(mdString)}
      />
    );
  }
}
