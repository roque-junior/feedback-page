import React, { useState } from 'react';

interface StarRatingProps {
  totalStars: number;
}

const Star: React.FC<{ selected: boolean; onClick: () => void }> = ({
  selected,
  onClick,
}) => (
  <span
    style={{ fontSize: '2rem', cursor: 'pointer', color: selected ? 'orange' : 'grey' }}
    onClick={onClick}
  >
    ★
  </span>
);

const StarRating: React.FC<StarRatingProps> = ({ totalStars }) => {
  const [starsSelected, setStarsSelected] = useState(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ marginBottom: '0.5rem' }}>Avaliar com Estrelas</div>
      <div style={{ display: 'flex' }}>
        {[...Array(totalStars)].map((_, i) => (
          <Star
            key={i}
            selected={i < starsSelected}
            onClick={() => setStarsSelected(i + 1)}
          />
        ))}
      </div>
      <p style={{ marginTop: '0.5rem' }}>
        {starsSelected} de {totalStars} estrelas
      </p>
    </div>
  );
};

export default StarRating;

