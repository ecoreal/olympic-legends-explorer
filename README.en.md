# Olympic Legends Explorer

[简体中文](README.md)

Olympic Legends Explorer is a static information website about the Olympic Games. It is built with HTML, CSS, and a small amount of vanilla JavaScript, and can be opened directly in a browser without a backend service or build step.

The site focuses on three main sections: an Olympic-themed home page, athlete search and profile stories, and classic Olympic Games event reviews. The repository also keeps CSV data archives for future search, visualization, or dynamic-page extensions.

## Entry Point

The root `index.html` redirects to the main site page:

```text
Olympic/index.html
```

For GitHub Pages, the repository can be published from the root directory. For local preview, open either `index.html` or `Olympic/index.html` directly in a browser.

## Features

- Home page with Olympic hero imagery, key metrics, content entry points, and featured athletes.
- Search page with athlete-name based jumps to profile sections.
- Athlete profile page for Ma Long, Usain Bolt, and Liu Xiang, including representative achievements, images, and official Olympic profile links.
- Event review page covering classic Olympic Games including Los Angeles 1984, Barcelona 1992, Sydney 2000, Beijing 2008, and London 2012.
- Data archive under `data/archive/` with CSV files for athletes, medals, schedules, events, venues, and related Olympic records.

## Project Structure

| Path | Description |
| --- | --- |
| `index.html` | Root entry for GitHub Pages and local access. |
| `Olympic/index.html` | Main home page and project entry. |
| `Olympic/search.html` | Athlete search page. |
| `Olympic/athlete.html` | Athlete profile page. |
| `Olympic/html/event.html` | Classic Olympic event review page. |
| `Olympic/Wstyle.css` | Shared styles for the home, search, and athlete pages. |
| `Olympic/picture/` | Image assets used by the home and athlete pages. |
| `Olympic/html/` | Event page and event-page image assets. |
| `data/archive/` | CSV data archive for Olympic records. |

## Local Usage

Open the page directly in a browser:

```text
index.html
```

Or serve the repository with any static file server:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000/
```

## Data and Media

Some images, text references, and external links are based on public web resources or official Olympic pages. The MIT License in this repository applies to the project code and documentation; third-party data, images, and external content remain subject to their original source terms.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
