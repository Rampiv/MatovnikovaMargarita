const originalConsoleError = console.error

console.error = (...args: any[]) => {
  const message = args[0]
  
  // Подавляем предупреждение о defaultProps
  if (
    typeof message === 'string' &&
    message.includes('Support for defaultProps will be removed')
  ) {
    return
  }
  
  // Подавляем предупреждения от react-yandex-maps
  if (
    typeof message === 'string' &&
    (message.includes('@pbe/react-yandex-maps') || 
     message.includes('YMaps') ||
     message.includes('Map') ||
     message.includes('Placemark'))
  ) {
    return
  }
  
  originalConsoleError.apply(console, args)
}