import React from 'react';
import Button from '../../ui/Button';
import { useFetcher } from 'react-router-dom';
import { updateOrder } from '../../services/apiRestaurant';

export default function UpdatePriority({ order }) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="">
      <Button>make priority</Button>
    </fetcher.Form>
  );
}

export async function action({ resquest, params }) {
  const res = await updateOrder(params.orderId, { priority: true });
  return null;
}
