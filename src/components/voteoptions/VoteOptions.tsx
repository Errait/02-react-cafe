import css from "./VoteOptions.module.css"

interface Votes {
  good: number;
  neutral: number;
  bad: number;
}

interface VoteOptionsProps{
  onVote: (type: VoteType) => void,
  onReset: () => void, 
  canReset: boolean;
}

type VoteType = 'good' | 'neutral' | 'bad';

function VoteOptions({ onVote, onReset, canReset}: VoteOptionsProps) {
  return <div className={css.container}>
      <button className={css.button} onClick={() => onVote("good")}>Good</button>
      <button className={css.button} onClick={() => onVote("neutral")}>Neutral</button>
      <button className={css.button} onClick={() => onVote("bad")}>Bad</button>
      {canReset && (
          <button className={`${css.button} ${css.reset}`} onClick={onReset}>
              Reset
          </button>)}
  </div>
};

export { type Votes, type VoteType, VoteOptions};