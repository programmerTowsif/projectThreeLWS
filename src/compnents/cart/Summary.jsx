import React from 'react'

export default function Summary() {
  return (
    <>
      <h3 class="font-bold text-lg mb-4">Order Summary</h3>

<div class="space-y-2 mb-4">
  <div class="flex justify-between">
    <span class="text-gray-600">Subtotal</span>
    <span class="font-medium">$565</span>
  </div>
  <div class="flex justify-between text-red-500">
    <span>Discount (-20%)</span>
    <span>-$113</span>
  </div>
  <div class="flex justify-between">
    <span class="text-gray-600">Delivery Fee</span>
    <span class="font-medium">$15</span>
  </div>
  <div class="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
    <span>Total</span>
    <span>$467</span>
  </div>
</div></>
  )
}
