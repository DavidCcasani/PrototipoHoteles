import { NextRequest, NextResponse } from "next/server";

const ALLOWED_FORMS = new Set([
  "property-newsletter",
  "plan-your-stay",
  "travel-agents",
  "contact",
]);

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ formId: string }> }
) {
  const { formId } = await params;

  if (!ALLOWED_FORMS.has(formId)) {
    return NextResponse.json(
      { ok: false, code: "UNKNOWN_FORM" },
      { status: 404 }
    );
  }

  try {
    const body = await req.json();
    if (body?.companyWebsite) {
      return NextResponse.json({ ok: true, formId, filtered: true });
    }
    return NextResponse.json({
      ok: true,
      formId,
      receivedAt: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { ok: false, code: "INVALID_REQUEST" },
      { status: 400 }
    );
  }
}
