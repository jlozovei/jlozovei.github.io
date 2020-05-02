const createDescription = (description) => {
  let html = '';

  description.forEach((paragraph) => {
    html += `<p>${paragraph}</p>`;
  });

  return html;
};

const createTags = (tags) => {
  let html = '';

  tags.forEach((tag) => {
    html += `<li class="tag tag--${tag}">${tag}</li>`;
  });

  return html;
};

const ListItem = ({ name, slug, url, description, tags }) =>
  `
  <li class="list__item">
    <div class="project">
      <h3>${name}</h3>
      <div class="project__description">
        ${createDescription(description)}
      </div>

      <ul class="project__tags">
        ${createTags(tags)}
      </ul>

      <div class="project__actions">
        <a href="${url}" target="_blank" rel="noopener noreferrer">See project</a>
      </div>
    </div>
  </li>
`;

export default ListItem;
