import type { FC } from 'react';
import { FiSend } from 'react-icons/fi';
import styles from './CommentInput.module.scss';

export interface CommentInputProps {
  placeholder?: string;
  onSubmit?: (value: string) => void;
  submitLabel?: string;
  className?: string;
}

export const CommentInput: FC<CommentInputProps> = ({
  placeholder = 'Add a comment...',
  submitLabel = 'Post Comment',
  onSubmit,
  className,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const textarea = form.querySelector<HTMLTextAreaElement>('textarea');
    const value = textarea?.value?.trim() ?? '';
    if (value && textarea) {
      onSubmit?.(value);
      textarea.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <textarea className={styles.textarea} placeholder={placeholder} name="comment" />
      <button type="submit" className={styles.button}>
        <FiSend size={16} />
        {submitLabel}
      </button>
    </form>
  );
};
