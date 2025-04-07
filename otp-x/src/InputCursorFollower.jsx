import React, { useEffect, useRef, useState } from 'react'

const InputCursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const followerRef = useRef(null)

  const pos = useRef({ x: 0, y: 0 }) // current position of the circle
  const rafId = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const animate = () => {
      // Easing effect
      pos.current.x += (mousePosition.x - pos.current.x) * 0.1
      pos.current.y += (mousePosition.y - pos.current.y) * 0.1

      if (followerRef.current) {
        followerRef.current.style.left = `${pos.current.x}px`
        followerRef.current.style.top = `${pos.current.y}px`
      }

      rafId.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    rafId.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafId.current)
    }
  }, [mousePosition])

  return (
    <div
      ref={followerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '24px',
        height: '24px',
        backgroundColor: 'deepskyblue',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 0 12px rgba(0, 191, 255, 0.6)',
        transition: 'background-color 0.2s ease',
      }}
    />
  )
}

export default InputCursorFollower