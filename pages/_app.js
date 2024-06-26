import Head from "next/head";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap')
</style>;
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style global jsx>{`
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
        }
        /* HTML5 display-role reset for older browsers */
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }
        body {
          line-height: 1;
        }
        ol,
        ul {
          list-style: none;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: "";
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
      `}</style>
      <style global jsx>{`
        body {
          background: linear-gradient(
            to right bottom,
            #f4f3f1,
            #d6d3d0,
            #a29c94,
            #94948f,
            #9c948e,
            #8f8c8c
          );
          background-repeat: no-repeat;
          background-attachment: fixed;
        }
        .stack {
          display: flex;
        }
        .stack.h {
          flex-direction: row;
        }
        .stack.v {
          flex-direction: column;
        }
        .stack.g-0 {
          gap: 0px;
        }
        .stack.g-1 {
          gap: 4px;
        }
        .stack.g-2 {
          gap: 8px;
        }
        .stack.g-3 {
          gap: 12px;
        }
        .stack.g-4 {
          gap: 16px;
        }
        .stack.g-5 {
          gap: 20px;
        }
      `}</style>
    </>
  );
}

export default MyApp;
