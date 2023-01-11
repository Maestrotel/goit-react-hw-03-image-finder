import css from './Button.module.css';

export const Button = () => {
  return (
    <div>
      <button type="button" className={css.Button}>
        Load more
      </button>
    </div>
  );
};
