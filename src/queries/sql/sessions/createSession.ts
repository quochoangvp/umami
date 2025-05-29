import { Prisma } from '@prisma/client';
import prisma from '@/lib/prisma';

export async function createSession(data: Prisma.SessionCreateInput) {
  const {
    id,
    websiteId,
    browser,
    os,
    device,
    ip,
    userAgent,
    screen,
    language,
    country,
    region,
    city,
    distinctId,
  } = data;

  return prisma.client.session.create({
    data: {
      id,
      websiteId,
      browser,
      os,
      device,
      ip,
      user_agent: userAgent,
      screen,
      language,
      country,
      region,
      city,
      distinctId,
    },
  });
}
