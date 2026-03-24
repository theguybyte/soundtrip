import { X, Plus, Minus, ShoppingBag, Trash2, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
  }).format(price);
}

export function CartDrawer() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-zinc-950 border-l border-white/10 z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-violet-500" />
            <h2 className="text-xl font-bold text-white">Tu Carrito</h2>
            {totalItems > 0 && (
              <span className="px-2 py-1 rounded-full bg-violet-600 text-white text-sm font-medium">
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-4">
                <ShoppingBag className="w-10 h-10 text-white/30" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Tu carrito está vacío
              </h3>
              <p className="text-white/50 text-sm mb-6">
                Explorá nuestros eventos y agregá experiencias musicales
              </p>
              <Button
                onClick={() => setIsCartOpen(false)}
                className="bg-violet-600 hover:bg-violet-700 text-white"
              >
                Ver eventos
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-zinc-900/50 rounded-xl p-4 border border-white/5"
                >
                  <div className="flex gap-4">
                    {/* Image */}
                    <OptimizedImage
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover"
                      sizes="80px"
                    />

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-white font-semibold truncate">
                            {item.name}
                          </h4>
                          <p className="text-white/60 text-sm">{item.artist}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1.5 rounded-lg hover:bg-red-500/20 text-white/40 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-white/50 text-xs">
                          <MapPin className="w-3 h-3 mr-1" />
                          {item.venue}, {item.city}
                        </div>
                        <div className="flex items-center text-white/50 text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          {item.date}
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-white font-medium w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <p className="text-violet-400 font-semibold">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Clear Cart */}
              {items.length > 0 && (
                <button
                  onClick={clearCart}
                  className="w-full py-2 text-sm text-white/40 hover:text-red-400 transition-colors"
                >
                  Vaciar carrito
                </button>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-zinc-900/30">
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-white/60">
                <span>Subtotal</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>Servicio</span>
                <span>Gratis</span>
              </div>
              <div className="flex justify-between text-white font-semibold text-lg pt-3 border-t border-white/10">
                <span>Total</span>
                <span className="text-violet-400">{formatPrice(totalPrice)}</span>
              </div>
            </div>

            <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-6">
              Finalizar reserva
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <p className="text-center text-white/40 text-xs mt-4">
              Al finalizar aceptás los términos y condiciones
            </p>
          </div>
        )}
      </div>
    </>
  );
}
