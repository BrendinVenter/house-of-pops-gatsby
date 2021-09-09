import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
// Get a list of tags from flavors - done
// Display each single tag as a list of tags
// If i click on tag, should display products only with that tag
// Count number of tags of selected tags

const StyledTagsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5em;

  padding: 1em 0;
`;

const StyledTags = styled.button`
  background-color: var(--blue);
  padding: 0.25em 0.5em;
  cursor: pointer;
  border: none;
  font-family: var(--body-font);

  border-radius: 0.25em;

  &:hover {
    //padding: 0.3em 0.6em;
    transform: scale(1.025);
    background-color: var(--yellow);
  }
`;

// markup
const FlavorFilter = () => {
  const { tags } = useStaticQuery(graphql`
    query TagQuery {
      tags: allSanityTags {
        nodes {
          id
          name
          slug {
            current
          }
        }
      }
    }
  `);
  console.clear();
  console.log(tags);
  return (
    <div>
      <h3>Filter</h3>
      <StyledTagsWrapper>
        {tags.nodes.map((tag) => (
          <StyledTags>{tag.name}</StyledTags>
        ))}
      </StyledTagsWrapper>
    </div>
  );
};
export default FlavorFilter;
