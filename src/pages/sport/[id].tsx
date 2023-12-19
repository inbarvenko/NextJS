import { useRouter } from 'next/router'

const SportItem = () => {
  const router = useRouter();

  return (
    <p>
      SportItem {router.query.id}
    </p>
  );
};



export default  SportItem;

